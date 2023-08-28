import { configureStore } from '@reduxjs/toolkit';
import displayForm from './displayForm';
import todoOperation from './todoOperation';
import taskStatus from './taskStatus';
import login from './login';
import textSearch from './textSearch';

const store = configureStore({
    reducer:{
        Form:displayForm,
        todo:todoOperation,
        task:taskStatus,
        login:login,
        text:textSearch
    }
})

export default store;