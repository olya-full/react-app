import * as jsxRuntime from "react/jsx-runtime";
import React, { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector, Provider } from "react-redux";
import pkg from '@reduxjs/toolkit';
const { createSlice, configureStore } = pkg;
import pkg1 from '@reduxjs/toolkit/dist/query/react/index.js';
const { createApi, fetchBaseQuery } = pkg1;
import { useForm } from "react-hook-form";
import { StaticRouter } from "react-router-dom/server.mjs";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const App$1 = "";
const createdCardsSlice = createSlice({
  name: "createdCards",
  initialState: {
    cards: []
  },
  reducers: {
    addNewCard: (state, action) => {
      state.cards.push(action.payload);
    }
  }
});
const { addNewCard } = createdCardsSlice.actions;
const searchValueSlice = createSlice({
  name: "searchValue",
  initialState: {
    value: ""
  },
  reducers: {
    updateSearchValue: (state, action) => {
      state.value = action.payload;
    }
  }
});
const { updateSearchValue } = searchValueSlice.actions;
const commonParams = {
  api_key: "4b621c2314e1aacd9186e7425c899a6b",
  per_page: "100",
  page: "1",
  format: "json",
  nojsoncallback: "1",
  safe_search: "1"
};
const singleCardParams = {
  api_key: "4b621c2314e1aacd9186e7425c899a6b",
  format: "json",
  nojsoncallback: "1",
  method: "flickr.photos.getInfo"
};
const photoApi = createApi({
  reducerPath: "api",
  tagTypes: ["searchResults"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.flickr.com/services/rest" }),
  endpoints: (build) => ({
    getSearchResults: build.query({
      query: (value = "a") => {
        return {
          url: `/?method=flickr.photos.search&text=${value}`,
          params: commonParams
        };
      },
      transformResponse: (res) => {
        const adaptedResult = [];
        res.photos.photo.forEach((item) => {
          adaptedResult.push({
            id: item.id,
            title: item.title,
            imageUrl: `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
          });
        });
        return adaptedResult;
      },
      providesTags: ["searchResults"]
    }),
    getOnePic: build.query({
      query: (id) => {
        return {
          url: `/?photo_id=${id}`,
          params: singleCardParams
        };
      },
      transformResponse: (resData) => {
        return {
          id: resData.photo.id,
          title: resData.photo.title._content,
          imageUrl: `https://live.staticflickr.com/${resData.photo.server}/${resData.photo.id}_${resData.photo.secret}.jpg`,
          date: resData.photo.dates.posted,
          author: resData.photo.owner.realname,
          location: resData.photo.owner.location
        };
      }
    })
  })
});
const { useGetSearchResultsQuery, useGetOnePicQuery } = photoApi;
const store = configureStore({
  reducer: {
    createdCards: createdCardsSlice.reducer,
    searchValue: searchValueSlice.reducer,
    [photoApi.reducerPath]: photoApi.reducer
  },
  middleware: (getDeafultMiddleware) => getDeafultMiddleware().concat(photoApi.middleware)
});
function NotFound() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Link, { to: "/", children: "HOME" }),
    /* @__PURE__ */ jsx("h1", { children: "Not Found" })
  ] });
}
const Modal$1 = "";
const Loader$1 = "";
const Loader = (props) => {
  useEffect(() => {
    props.loaderFunc && props.loaderFunc();
  });
  return /* @__PURE__ */ jsxs("div", { className: "loader-container", children: [
    /* @__PURE__ */ jsx("img", { src: "./load.gif" }),
    /* @__PURE__ */ jsx("div", { className: "loader-text", children: "Loading" })
  ] });
};
const Modal = ({ modalFunc, id }) => {
  const { data, isFetching } = useGetOnePicQuery(id || "");
  const handleClick = () => {
    modalFunc && modalFunc();
  };
  return /* @__PURE__ */ jsx("div", { onClick: handleClick, className: "modal-outer-container", children: /* @__PURE__ */ jsxs("div", { onClick: (e) => e.stopPropagation(), className: "modal-inner-container", children: [
    /* @__PURE__ */ jsx("div", { className: "modal-cross-container", children: /* @__PURE__ */ jsx("div", { className: "modal-cross-wrap", children: /* @__PURE__ */ jsx("img", { onClick: handleClick, className: "modal-cross-img", src: "./cross.png" }) }) }),
    isFetching && /* @__PURE__ */ jsx(Loader, {}),
    data && /* @__PURE__ */ jsx(Card, { maxheight: "unset-max-height", ...data })
  ] }) });
};
const Cards$1 = "";
const Card = (props) => {
  const date = props.date ? new Date(+props.date * 1e3).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "card-title", children: props.title || "Unnamed Picture" }),
    /* @__PURE__ */ jsx("div", { className: "card-img-wrap", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: `card-img${props.maxheight ? " " + props.maxheight : ""}`,
        alt: "Picture.",
        src: props.imageUrl
      }
    ) }),
    date && /* @__PURE__ */ jsxs("div", { className: "card-date", children: [
      "Picture posted on ",
      date && date
    ] }),
    props.author && /* @__PURE__ */ jsxs("div", { className: "card-author", children: [
      "By ",
      props.author
    ] }),
    props.location && /* @__PURE__ */ jsxs("div", { className: "card-location", children: [
      "At ",
      props.location
    ] })
  ] });
};
const Cards = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState("");
  const handleClick = (event, id) => {
    event.preventDefault();
    setModalInfo(id);
    setShowModal(true);
  };
  const toggleModalDisplay = () => {
    showModal && setShowModal(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showModal && /* @__PURE__ */ jsx(Modal, { modalFunc: toggleModalDisplay, id: modalInfo }),
    /* @__PURE__ */ jsx("div", { className: "cards", children: props.images.map((card) => {
      return /* @__PURE__ */ jsx("div", { className: "card", onClick: (event) => handleClick(event, card.id), children: /* @__PURE__ */ jsx(Card, { ...card }) }, card.id);
    }) })
  ] });
};
const Search = "";
const Button$1 = "";
const Button = (props) => {
  return /* @__PURE__ */ jsx("button", { className: "button", type: props.buttonType, children: props.buttonText });
};
const useAppDispatch = useDispatch;
const useAppSelector = useSelector;
const SearchElem = (props) => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = React.useState(
    useAppSelector((state) => state.searchValue.value)
  );
  const [noResults, setNoResults] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setValue(inputValue);
    dispatch(updateSearchValue(inputValue));
    setNoResults(false);
  };
  const updateInputValue = (event) => {
    setInputValue(event.target.value);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("form", { className: "home-search-form", onSubmit: (event) => handleSubmit(event), children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "search",
          className: "home-search",
          placeholder: "🔎︎ Search by picture title",
          value: inputValue,
          onChange: (event) => updateInputValue(event)
        }
      ),
      /* @__PURE__ */ jsx(Button, { buttonText: "Search", buttonType: "submit" })
    ] }),
    noResults && /* @__PURE__ */ jsx("div", { children: "Nothing is found." })
  ] });
};
const Home = () => {
  const [searchValue, setSearchValue] = React.useState(
    useAppSelector((state) => state.searchValue.value)
  );
  const { data = [], isFetching } = useGetSearchResultsQuery(searchValue ? searchValue : "a");
  const setValue = (value) => {
    setSearchValue(value);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Picture Search" }),
    /* @__PURE__ */ jsx(SearchElem, { setValue }),
    isFetching && /* @__PURE__ */ jsx(Loader, {}),
    data && /* @__PURE__ */ jsx(Cards, { images: data })
  ] });
};
const AboutUs = () => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("h1", { children: "About Us" }) });
const Header$1 = "";
const Header = () => {
  return /* @__PURE__ */ jsx("div", { className: "header", children: /* @__PURE__ */ jsx(Nav, {}) });
};
const Nav = () => {
  return /* @__PURE__ */ jsxs("nav", { className: "header-nav", children: [
    /* @__PURE__ */ jsx(NavLink, { className: "header-nav-item", to: "/", children: "Home" }),
    /* @__PURE__ */ jsx(NavLink, { className: "header-nav-item", to: "/form", children: "Form" }),
    /* @__PURE__ */ jsx(NavLink, { className: "header-nav-item", to: "/about", children: "About Us" })
  ] });
};
const CreatedCards$1 = "";
const CreatedCard = (props) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("div", { className: "created-card-title", children: props.title }),
  /* @__PURE__ */ jsx("div", { className: "created-card-img-wrap", children: /* @__PURE__ */ jsx("img", { className: "created-card-cover", alt: "Book cover.", src: props.cover }) }),
  /* @__PURE__ */ jsxs("div", { className: "created-card-year", children: [
    "Read on ",
    props.year
  ] }),
  /* @__PURE__ */ jsx("div", { className: "created-card-genre", children: props.genre }),
  /* @__PURE__ */ jsx("div", { className: "created-card-popularity", children: props.popularity })
] });
const CreatedCards = (props) => /* @__PURE__ */ jsx("div", { className: "created-cards", children: props.cards.map((cardInfo, index) => {
  return /* @__PURE__ */ jsx("div", { className: "created-card", children: /* @__PURE__ */ jsx(CreatedCard, { ...cardInfo }) }, index);
}) });
const Form$1 = "";
const DateInput$1 = "";
const DateInput = ({ register, isError }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(
    "input",
    {
      ...register("dateInput", { required: true }),
      className: "form-date-input",
      type: "text",
      placeholder: "When was the last time you read it?",
      onFocus: (e) => e.target.type = "date",
      onBlur: (e) => e.target.type = "text"
    }
  ),
  isError ? /* @__PURE__ */ jsx(ErrorElement, { errorText: "Please make sure the field is filled in." }) : /* @__PURE__ */ jsx(ErrorElement, {})
] });
const TextInput$1 = "";
const TextInput = ({ register, isError }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ...register("textInput", { required: true }),
        className: "form-text-input",
        type: "text",
        placeholder: "What's your favourite book?"
      }
    ),
    isError ? /* @__PURE__ */ jsx(ErrorElement, { errorText: "Please make sure the field is filled in." }) : /* @__PURE__ */ jsx(ErrorElement, {})
  ] });
};
const Select$1 = "";
const Select = ({ register, isError }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "select",
      {
        ...register("select", {
          validate: {
            notDefault: (value) => value.length > 0
          }
        }),
        name: "select",
        defaultValue: "",
        className: "form-select",
        children: [
          /* @__PURE__ */ jsx("option", { disabled: true, value: "", children: "What is the genre of your favourite book?" }),
          /* @__PURE__ */ jsx("option", { value: "Fantasy", children: "Fantasy" }),
          /* @__PURE__ */ jsx("option", { value: "Romance", children: "Romance" }),
          /* @__PURE__ */ jsx("option", { value: "Detective", children: "Detective" }),
          /* @__PURE__ */ jsx("option", { value: "Sci-fi", children: "Science Fiction" }),
          /* @__PURE__ */ jsx("option", { value: "Other Genre", children: "Other Genre" })
        ]
      }
    ),
    isError ? /* @__PURE__ */ jsx(ErrorElement, { errorText: "Please pick your favourite genre." }) : /* @__PURE__ */ jsx(ErrorElement, {})
  ] });
};
const RadioInput$1 = "";
const RadioInput = ({ register, isError }) => {
  const radioOptions = ["Very popular book", "Moderately popular book", "Not so popular book"];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("fieldset", { className: "fieldset-radio", children: [
      /* @__PURE__ */ jsx("legend", { children: "Is it a well-known book?" }),
      radioOptions.map((option, i) => {
        return /* @__PURE__ */ jsxs("label", { className: "fieldset-label", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ...register("radioInput", { required: true }),
              type: "radio",
              className: "fieldset-input",
              value: option
            }
          ),
          option
        ] }, i);
      })
    ] }),
    isError ? /* @__PURE__ */ jsx(ErrorElement, { errorText: "Please choose how popular this book is." }) : /* @__PURE__ */ jsx(ErrorElement, {})
  ] });
};
const FileInput$1 = "";
const FileInput = ({ register, isError }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsxs("label", { className: "form-file-input-label", children: [
    "Please upload the cover of your favourite book.",
    /* @__PURE__ */ jsx(
      "input",
      {
        ...register("fileInput", {
          validate: {
            isChosen: (file) => file.length > 0,
            isImage: (file) => file[0].type.startsWith("image")
          }
        }),
        type: "file",
        accept: ".jpg, .jpeg, .png",
        className: "form-file-input"
      }
    )
  ] }),
  isError ? /* @__PURE__ */ jsx(ErrorElement, { errorText: "Please select the book cover in JP(E)G or PNG." }) : /* @__PURE__ */ jsx(ErrorElement, {})
] });
const CheckboxInput$1 = "";
const CheckboxInput = ({ register, isError }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "form-checkbox", children: /* @__PURE__ */ jsxs("label", { className: "form-checkbox-input-label", children: [
      "Would you like to post your favourite book here?",
      /* @__PURE__ */ jsx(
        "input",
        {
          ...register("checkboxInput", { required: true }),
          type: "checkbox",
          className: "form-chechbox-input"
        }
      )
    ] }) }),
    isError ? /* @__PURE__ */ jsx(ErrorElement, { errorText: "Please agree to post your book." }) : /* @__PURE__ */ jsx(ErrorElement, {})
  ] });
};
const ErrorElement = (props) => {
  return /* @__PURE__ */ jsx("div", { className: "form-error", children: props.errorText });
};
const Form = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({ reValidateMode: "onSubmit" });
  const onSubmit = (data) => {
    const newCard = {
      title: data.textInput,
      year: new Date(data.dateInput).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      genre: data.select,
      popularity: data.radioInput,
      cover: URL.createObjectURL(data.fileInput[0])
    };
    props.renderCards(newCard);
    reset();
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "form-form", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(TextInput, { register, required: true, isError: errors.textInput ? true : null }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(DateInput, { register, required: true, isError: errors.dateInput ? true : null }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Select, { register, required: true, isError: errors.select ? true : null }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(RadioInput, { register, required: true, isError: errors.radioInput ? true : null }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(FileInput, { register, required: true, isError: errors.fileInput ? true : null }) }),
    /* @__PURE__ */ jsx(
      CheckboxInput,
      {
        register,
        required: true,
        isError: errors.checkboxInput ? true : null
      }
    ),
    /* @__PURE__ */ jsx(Button, { buttonText: "Post it!", buttonType: "submit" })
  ] });
};
const PopUp$1 = "";
const PopUp = (props) => {
  React.useEffect(() => {
    props.popUpFunc && props.popUpFunc();
  });
  return /* @__PURE__ */ jsx("div", { className: "popup-container", children: /* @__PURE__ */ jsx("div", { className: "popup-text", children: props.popUpText }) });
};
const FormPage = () => {
  const dispatch = useAppDispatch();
  const [showPopup, setShowPopup] = React.useState(false);
  const togglePopup = () => {
    if (showPopup === true) {
      setTimeout(() => {
        setShowPopup(false);
      }, 1500);
    }
  };
  const renderCards = (newCard) => {
    dispatch(addNewCard(newCard));
    setShowPopup(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Your Favourite Book" }),
    /* @__PURE__ */ jsx(Form, { renderCards }),
    showPopup && /* @__PURE__ */ jsx(PopUp, { popUpText: "Your input has beed saved!", popUpFunc: togglePopup }),
    /* @__PURE__ */ jsx(CreatedCards, { cards: useAppSelector((state) => state.createdCards.cards) })
  ] });
};
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutUs, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/form", element: /* @__PURE__ */ jsx(FormPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
    ] })
  ] });
}
function WrappedApp() {
  return /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(App, {}) });
}
const render = (url, context) => {
  const stream = ReactDOMServer.renderToPipeableStream(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(WrappedApp, {}) }) }),
    context
  );
  return stream;
};
export {
  render as default
};
