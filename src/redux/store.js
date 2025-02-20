import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filltersSlice";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const persistConfig = {
	key: "tasks",
	storage,
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

export const store = configureStore({
	reducer: {
		tasks: persistedReducer,
		filters: filtersReducer,
	},
	//Додаємо middleware (прошарок), щоб позбутися помилок
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store); // Експортуємо "персистований" stor (persistor) у зовнішній код. Використовується для PersistGate (обгортці для App)
