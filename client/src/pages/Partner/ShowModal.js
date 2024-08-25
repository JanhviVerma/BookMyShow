import {
    Col,
    Modal,
    Row,
    Form,
    Input,
    Button,
    Select,
    Table,
    message,
  } from "antd";
  import { showLoading, hideLoading } from "../../redux/loaderSlice";
  import { useDispatch } from "react-redux";
  // import { addTheatre, updateTheatre } from '../../apicalls/theatres';
  import {
    ArrowLeftOutlined,
    EditOutlined,
    DeleteOutlined,
  } from "@ant-design/icons";
  import { useEffect, useState } from "react";
  // import { useSelector } from 'react-redux';
  import { getAllMovies } from "../../calls/movies";
  import {
    addShow,
    deleteShow,
    getShowsByTheatre,
    updateShow,
  } from "../../calls/shows";
  import moment from "moment";
  
  const ShowModal = ({
    isShowModalOpen,
    setIsShowModalOpen,
    selectedTheatre,
  }) => {
    const [view, setView] = useState("table");
    const [movies, setMovies] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [shows, setShows] = useState(null);
    const [selectedShow, setSelectedShow] = useState(null);
    const dispatch = useDispatch();
  
    const getData = async () => {
      try {
        dispatch(showLoading());
        const movieResponse = await getAllMovies();
        if (movieResponse.success) {
          setMovies(movieResponse.data);
        } else {
          message.error(movieResponse.message);
        }
  
        const showResponse = await getShowsByTheatre({
          theatreId: selectedTheatre._id,
        });
        if (showResponse.success) {
          setShows(showResponse.data);
        } else {
          message.error(showResponse.message);
        }
  
        dispatch(hideLoading());
      } catch (err) {
        message.error(err.message);
        dispatch(hideLoading());
      }
    };
  
    const onFinish = async (values) => {
      try {
        dispatch(showLoading());
        let response = null;
        if (view === "form") {
          response = await addShow({ ...values, theatre: selectedTheatre._id });
        } else {
          // console.log(view, selectedTheatre, selectedTheatre._id);
          response = await updateShow({
            ...values,
            showId: selectedShow._id,
            theatre: selectedTheatre._id,
          });
        }
        if (response.success) {
          getData();
          message.success(response.message);
          setView("table");
        } else {
          message.error(response.message);
        }
        dispatch(hideLoading());
      } catch (err) {
        message.error(err.message);
        dispatch(hideLoading());
      }
    };
  
    const handleCancel = () => {
      setIsShowModalOpen(false);
    };
  
    const handleDelete = async (showId) => {
      try {
        dispatch(showLoading());
        const response = await deleteShow({ showId: showId });
        if (response.success) {
          message.success(response.message);
          getData();
        } else {
          message.error(response.message);
        }
        dispatch(hideLoading());
      } catch (err) {
        message.error(err.message);
        dispatch(hideLoading());
      }
    };
    const columns = [
      {
        title: "Show Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Show Date",
        dataIndex: "date",
        render: (text, data) => {
          return moment(text).format("MMM Do YYYY");
        },
      },
      {
        title: "Show Time",
        dataIndex: "time",
        render: (text, data) => {
          return moment(text, "HH:mm").format("hh:mm A");
        },
      },
      {
        title: "Movie",
        dataIndex: "movie",
        render: (text, data) => {
          return data.movie.title;
        },
      },
      {
        title: "Ticket Price",
        dataIndex: "ticketPrice",
        key: "ticketPrice",
      },
      {
        title: "Total Seats",
        dataIndex: "totalSeats",
        key: "totalSeats",
      },
      {
        title: "Available Seats",
        dataIndex: "seats",
        render: (text, data) => {
          return data.totalSeats - data.bookedSeats.length;
        },
      },
      {
        title: "Action",
        dataIndex: "action",
        render: (text, data) => {
          return (
            <div className="d-flex align-items-center gap-10">
              <Button
                onClick={() => {
                  setView("edit");
                  setSelectedMovie(data.movie);
                  setSelectedShow({
                    ...data,
                    date: moment(data.date).format("YYYY-MM-DD"),
                  });
                  console.log(selectedMovie && selectedMovie.title);
                }}
              >
                <EditOutlined />
              </Button>
              <Button onClick={() => handleDelete(data._id)}>
                <DeleteOutlined />
              </Button>
              {data.isActive && (
                <Button
                  onClick={() => {
                    setIsShowModalOpen(true);
                  }}
                >
                  + Shows
                </Button>
              )}
            </div>
          );
        },
      },
    ];
  
  }
  export default ShowModal;