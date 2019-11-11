import { merge } from "lodash";
import moment from "moment";
import axios from "axios";

const initialState = { page: "" };

const UPDATE_EVENTS = "lss/events/UPDATE";
const UPDATE_AIRCREW = "lss/sign-in/aircrew/UPDATE";
const UPDATE_COMPLETED_EVENT = "lss/sign-in/completed-event/UPDATE";
const UPDATE_COMPLETION_DATE = "lss/sign-in/completion-date/UPDATE";
const UPDATE_EXPIRY_DATE = "lss/sign-in/expiry-date/UPDATE";
const UPDATE_USER_SELECTED_EXPIRY_DATE = "lss/sign-in/user-selected-expiry-date/UPDATE";
const UPDATE_LSS_ENTRIES = "lss/entries/UPDATE";
const UPDATE_LSS_SELECTED_ENTRY = "lss/selected-entry/UPDATE";
const CLEAR_LSS_SIGN_IN = "lss/sign-in/CLEAR";
const UPDATE_LSS_PAGE = "lss/page/UPDATE";
const UPDATE_LSS_SIGN_IN = "lss/sign-in/UPDATE";

/*
Store Model:
{

project:{
id: 123,
name:"projectA",
contractors:["ABC","CDE"..],
isApproved: true,
isDelete: true,
,
selectedProject:{
id:123,
}










}
  events: ["string","string"], //["YOGA", "CBRE"]
  signIn: {
     aircrew: {
       ehrID: "string", //["23"]
       alias: "string" //["TAN K"]
     },
     completionDate: <Date>, // Date(2019-09-19T02:34:02.141Z)
     completedEvent: "string", //"CBRE"
     expiryDate: <Date> // Date(2024-09-30T00:00:00.000Z)
  },
  selectedEntry: {
    id: 123,
    aircrew: {
      ehrID: "string",
      alias: "string"
    },
    completionDate: <Date>, // Date(2019-09-19T02:34:02.141Z)
    completedEvent: "string", //"CBRE"
    expiryDate: <Date> // Date(2024-09-30T00:00:00.000Z)
  },
  entries: [{
    id: 123,
    aircrew: {
      ehrID: "string",
      alias: "string"
    },
    completionDate: <Date>, // Date(2019-09-19T02:34:02.141Z)
    completedEvent: "string", //"CBRE"
    expiryDate: <Date> // Date(2024-09-30T00:00:00.000Z)
  }]
}
*/

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_EVENTS:
            return Object.assign({}, state, { events: action.state });
        case UPDATE_AIRCREW:
            return Object.assign({}, state, { signIn: Object.assign({}, state.signIn, { aircrew: action.state }) });
        case UPDATE_COMPLETION_DATE:
            return Object.assign({}, state, { signIn: Object.assign({}, state.signIn, { completionDate: action.state }) });
        case UPDATE_COMPLETED_EVENT:
            return Object.assign({}, state, { signIn: Object.assign({}, state.signIn, { completedEvent: action.state }) });
        case UPDATE_EXPIRY_DATE:
            return Object.assign({}, state, { signIn: Object.assign({}, state.signIn, { expiryDate: action.state }) });
        case UPDATE_USER_SELECTED_EXPIRY_DATE:
            return Object.assign(
                {},
                state,
                { signIn: Object.assign({}, state.signIn, { userSelectedExpiryDate: action.state }) }
            );
        case UPDATE_LSS_ENTRIES:
            return Object.assign({}, state, { entries: action.state });
        case UPDATE_LSS_SELECTED_ENTRY:
            return Object.assign({}, state, { selectedEntry: action.state });
        case CLEAR_LSS_SIGN_IN:
            return Object.assign({}, state, { signIn: { completionDate: state.signIn.completionDate } });
        case UPDATE_LSS_PAGE:
            return Object.assign({}, state, { page: action.state });
        case UPDATE_LSS_SIGN_IN:
            return Object.assign({}, state, { signIn: action.state });
        default:
            return state;
    }
};
export default reducer;

export const setLSSAircrew = signIn => (dispatch) => {
    dispatch({
        state: signIn,
        type: UPDATE_AIRCREW
    });
};

export const getLSSEvents = () => async (dispatch) => {
    const response = await axios.get("/api/lss-events");
    dispatch({
        state: response.data,
        type: UPDATE_EVENTS
    });
};

export const setLSSCompletionDate = date => (dispatch) => {
    dispatch({
        state: date,
        type: UPDATE_COMPLETION_DATE
    });
};

export const setLSSCompletedEvent = eventName => (dispatch) => {
    dispatch({
        state: eventName,
        type: UPDATE_COMPLETED_EVENT
    });
};

export const setLSSExpiryDate = expiryDate => (dispatch) => {
    dispatch({
        state: expiryDate ? new Date(expiryDate) : null,
        type: UPDATE_EXPIRY_DATE
    });
};

export const getLSSExpiryDate = newSignIn => async (dispatch, getState) => {
    const { signIn } = merge(getState().lss, { signIn: newSignIn });
    const response = await axios.get("/api/lss-expiry-date",
        {
            params: {
                cat: signIn.aircrew.cat,
                completionDate: moment(signIn.completionDate).toISOString(true),
                event: signIn.completedEvent
            }
        });
    setLSSExpiryDate(response.data)(dispatch);
};

export const setLSSUserSelectedExpiryDate = expiryDate => (dispatch) => {
    dispatch({
        state: expiryDate,
        type: UPDATE_USER_SELECTED_EXPIRY_DATE
    });
};

export const getLSSEntriesByDate = date => async (dispatch) => {
    const dataParam = moment(date).toISOString(true);
    const lssEntriesOnDate = (await axios.get("/api/lss-entry", { params: { date: dataParam } })).data;
    const convertedLSSEntries = lssEntriesOnDate.reduce((
        acc,
        { id, completionDate, expiryDate, completedEvent, aircrew }
    ) => {
        acc.push({
            id,
            completionDate: new Date(completionDate),
            expiryDate: new Date(expiryDate),
            completedEvent,
            aircrew
        });
        return acc;
    }, []);
    dispatch({
        state: convertedLSSEntries,
        type: UPDATE_LSS_ENTRIES
    });
};

export const postLSSEntry = lssEntry => async () => {
    await axios.post("/api/lss-entry", lssEntry);
};

export const setLSSPage = page => (dispatch) => {
    dispatch({
        state: page,
        type: UPDATE_LSS_PAGE
    });
};

export const setLSSSignIn = signIn => (dispatch) => {
    dispatch({
        state: signIn,
        type: UPDATE_LSS_SIGN_IN
    });
};

export const setLSSSelectedEntry = selectedEntry => (dispatch) => {
    dispatch({
        state: selectedEntry,
        type: UPDATE_LSS_SELECTED_ENTRY
    });
};

export const resetLSSSignIn = () => (dispatch) => {
    setLSSPage("")(dispatch);
    dispatch({
        type: CLEAR_LSS_SIGN_IN
    });
    setLSSSelectedEntry(null)(dispatch);
};
