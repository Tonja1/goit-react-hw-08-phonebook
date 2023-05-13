import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";



axios.defaults.baseURL = 'https://6459422c4eb3f674df8ba568.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contact/remove',
    async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`/contacts/${id}`);
        toast.success(`This contact is deleted!`);
        return id;
    } catch (error) {
        return rejectWithValue(error);
    }
    }
);

export const addContact = createAsyncThunk(
    'contacts/add',
    async ({ name, phone }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, phone });
            toast.success(`This ${name} contact is added to phonebook!`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);