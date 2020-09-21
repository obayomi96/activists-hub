import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Search, Grid, List, User, Calendar } from "react-feather";
import { Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  fetchActivists,
  addActivist,
} from "../../store/actions/activistsActions";
import Header from "../../components/Layout/Header";
import Button from "../../components/Buttons";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import ActivistCard from "../../components/ActivistCard";
import Cancel from "../../assets/svgs/Cancel";
import Created from "../../assets/svgs/Created";

const Activists = ({ activists, fetchActivists, addActivist, singleActivist }) => {
  const [activistsList, setActivistsList] = useState([]);
  const [listView, setListView] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(false);
  const [values, setValues] = useState({
    person: "",
    description: "",
    placeOfBirth: "",
    imageUrl: "",
    dateOfBirth: "",
  });

  const selectFile = useRef();
  
  useEffect(() => {
    async function loadData() {
      await fetchActivists();
      if (activists) {
        setActivistsList(activists);
      }
    }
    loadData();
  }, [activists]);

  const confirmModalState = () => {
    setConfirmModal(false);
  }

  const handleModalState = () => {
    setFormModal(!formModal);
  };

  const handleView = () => {
    setListView(!listView);
  };

  const triggerSelect = () => {
    selectFile.current.click();
  };

  const handleChange = (event) => {
    event.persist()
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleImageChange = (event) => {
    event.persist()
    setValues((prevState) => ({
      ...prevState,
      imageUrl: URL.createObjectURL(event.target.files[0]),
    }));
    setSelectedImg(true);
  };

  const handleDateChange = (date) => {
    setValues((prevState) => ({
      ...prevState,
      dateOfBirth: date,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { person, description, placeOfBirth, dateOfBirth, imageUrl } = values;
    const newPerson = {
      person,
      description,
      placeOfBirth,
      dateOfBirth,
      imageUrl,
    };
    await addActivist(newPerson);
    setValues({
      person: "",
      description: "",
      placeOfBirth: "",
      dateOfBirth: "",
      imageUrl: "",
    });
    setActivistsList([...activistsList, singleActivist])
    setFormModal(false);
    setConfirmModal(true);
  };

  return (
    <div className="activists-div">
      <Header headerBgColor="#fff" textColor="#6A0000" />
      <div className="section-one-div">
        <div className="sec-one-left">
          <Search size={15} className="search-icon" />
          <Input
            value=""
            name="search"
            className="search-input"
            label=""
            placeholder="Search for activists, movements, etc"
            style={{
              className: "search-input act",
              width: "404px",
              height: "64px",
              borderRadius: "2px",
              border: "1px solid #E1E1E1",
              color: "#b4b4b4",
              backgroundColor: "#fff",
              margin: "10px",
              padding: "0 40px",
            }}
          />
          <Button
            label="Search"
            className="add-activist-btn act"
            style={{
              backgroundColor: "#6A0000",
              color: "#fff",
              border: "3px solid #6A0000",
              outline: "none",
              height: "64px",
              width: "151px",
              borderRadius: "2px",
              fontSize: "20px",
              margin: "10px",
            }}
          />
        </div>
        {confirmModal ?
          (
            <div className="modal-div2">
              <div className="conf-modal">
                <div
                  onClick={confirmModalState}
                  style={{ width: "auto", float: "right", padding: '20px' }}
                >
                  <Cancel />
                </div>
                <div className="svg-div">
                  <Created />
                </div>
                <div className="footer">
                  <p>
                    <b>{singleActivist && singleActivist.person}</b> has been added to <b>Activists</b>
                  </p>
                </div>
              </div>
          </div>
          ) : ''
        }
        {formModal ? (
          <div className="modal-div">
            <div className="main-modal">
              <div className="act-modal-header">
                <div className="inner-modal-nav">
                  <div className="">
                    <h1 className="add-text">Add an Activist</h1>
                  </div>
                  <div onClick={handleModalState} style={{ width: "auto" }}>
                    <Cancel />
                  </div>
                </div>
              </div>
              <div>
                <form>
                  <div className="form-div">
                    <div className="img-upload-div">
                      <div onClick={triggerSelect} className="img-upload">
                        {selectedImg ? (
                          <img
                            className="user-img"
                            alt="upload"
                            src={values.imageUrl}
                          />
                        ) : (
                          <>
                            <User size={60} className="user-icon" />
                            <input
                              ref={selectFile}
                              onChange={handleImageChange}
                              className="file-input"
                              type="file"
                              accept="image/*"
                              id="image"
                              name="file"
                            />
                          </>
                        )}
                        <span className="add-photo-tx">Add a Photo</span>
                      </div>
                    </div>
                    <div className="name-input-div">
                      <Input
                        id="person"
                        className="name-input"
                        label="Activist Name"
                        placeholder="Enter activist name"
                        name="person"
                        value={values.person}
                        handleChange={handleChange}
                        style={{
                          className: "activist-name",
                          width: "310px",
                          height: "55px",
                          borderRadius: "2px",
                          border: "1px solid #E1E1E1",
                          color: "#b4b4b4",
                          backgroundColor: "#fff",
                          marginTop: "10px",
                          padding: "0 10px",
                          fontSize: "14px",
                          fontWeight: "normal",
                          outline: "none",
                        }}
                      />
                    </div>
                    <div className="textarea-div">
                      <TextArea
                        id="description"
                        label="Descrtiption"
                        type="text"
                        className="textarea"
                        name="description"
                        value={values.description}
                        handleChange={handleChange}
                        id="exampleText"
                        placeholder="Activist Description"
                      />
                    </div>
                    <div className="dob-div">
                      <div>
                        <p style={{ color: "#b4b4b4" }}>Date of Birth</p>
                        <DatePicker
                          className="datepicker"
                          selected={values.dateOfBirth}
                          onChange={(date) => handleDateChange(date)}
                          autoComplete="off"
                          placeholderText="Select activist date of birth"
                          name="dateOfBirth"
                          id="DatePicker"
                          // value={values.dateOfBirth}
                          style={{
                            height: "55px",
                            width: "310px",
                            borderRadius: "2px",
                            border: "1px solid #E1E1E1",
                            color: "#b4b4b4",
                            backgroundColor: "#fff",
                            marginTop: "10px",
                            padding: "0 10px",
                          }}
                        />
                        <Calendar size={20} className="date-icon" />
                      </div>
                      <Input
                        id="placeOfBirth"
                        label="Place of Birth"
                        placeholder="Enter activist place of birth"
                        className="pob"
                        name="placeOfBirth"
                        value={values.placeOfBirth}
                        handleChange={handleChange}
                        style={{
                          height: "55px",
                          width: "310px",
                          borderRadius: "2px",
                          border: "1px solid #E1E1E1",
                          color: "#b4b4b4",
                          backgroundColor: "#fff",
                          marginTop: "10px",
                          padding: "0 10px",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div className="submit-btn-div">
                    <Button
                      className="btn"
                      label="Add Activist"
                      handleClick={handleSubmit}
                      style={{
                        backgroundColor: "#6A0000",
                        color: "#fff",
                        border: "none",
                        outline: "none",
                        height: "55px",
                        width: "210px",
                        borderRadius: "2px",
                        fontSize: "20px",
                        margin: "20px auto ",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="sec-one-right">
          <Button
            label="Add New Activist"
            className="add-activist-btn"
            handleClick={handleModalState}
            style={{
              backgroundColor: "#fff",
              color: "#6A0000",
              border: "3px solid #6A0000",
              outline: "none",
              height: "64px",
              width: "243px",
              borderRadius: "2px",
              fontSize: "20px",
            }}
          />
        </div>
      </div>
      <div className="toggle-view-div">
        <div className="toggle-icons-div">
          {listView ? (
            <Grid onClick={handleView} size={30} className="grid-icon v-icon" />
          ) : (
            <List onClick={handleView} size={30} className="list-icon v-icon" />
          )}
        </div>
      </div>
      <div className="activists-section">
        <div className="">
          {!listView ? (
            <div className="inner-div fixed-header">
              {activistsList &&
                activistsList.map((activist, index) => {
                  return (
                    <ActivistCard
                      className="flex-item"
                      key={index}
                      avatarUrl={activist.imgUrl}
                      name={activist.person}
                      desc={activist.description}
                      dob={activist.dateOfBirth}
                      location={activist.placeOfBirth}
                    />
                  )
                })}
            </div>
          ) : (
            <div className="list-view-div fixed-header">
              <Table className="list-table">
                <thead className="fixed-th">
                  <tr
                    className=""
                    style={{
                      position: 'fixed',
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      bottom: '323px',
                      // top: '200px'
                    }}
                  >
                    <th
                      style={{
                        marginRight: "550px",
                        paddingLeft: "50px",
                        float: "left",
                        width: "30%",
                      }}
                    >
                      Name
                    </th>
                    <th
                      style={{
                        width: "100%",
                        float: "left",
                        textAlign: "left",
                      }}
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                {activistsList &&
                  activistsList.map((activist, index) => {
                    return (
                      <tbody key={index}>
                        <tr className="tr">
                          <td className="td">
                            <div
                              style={{
                                width: "auto",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <div className="img-d">
                                <img
                                  className="img"
                                  width="64px"
                                  height="64px"
                                  alt="avtr"
                                  src={activist.imgUrl}
                                />
                              </div>
                              {activist.person}
                            </div>
                          </td>
                          <td className="right">{activist.description}</td>
                        </tr>
                      </tbody>
                    );
                  })}
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activists: state.activist.activists,
  singleActivist: state.activist.singleActivist,
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivists: () => dispatch(fetchActivists()),
  addActivist: (data) => dispatch(addActivist(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activists);
