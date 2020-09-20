import {
	USER_EMAIL,
	USER_PASSWORD,
	USER_FULLNAME,
	USERNAME,
	USER_DESCRIPTION,
	PICKER,
	USER_BIO_RECORDING,
	WEBSITE,
	IMAGE,
} from "../constants/actionTypes";

export function getEmail(email) {
	return { type: USER_EMAIL, email };
}

export function getPassword(password) {
	return { type: USER_PASSWORD, password };
}

export function getFullName(fullName) {
	return { type: USER_FULLNAME, fullName };
}

export function getUsername(username) {
	return { type: USERNAME, username };
}

export function getDescription(description) {
	return { type: USER_DESCRIPTION, description };
}

export function getPickerValue(picker) {
	return { type: PICKER, picker };
}

export function getRecordingBio(recording) {
	return { type: USER_BIO_RECORDING, recording };
}

export function getWebsite(link) {
	return { type: WEBSITE, link };
}

export function getImage(uri) {
	return { type: IMAGE, uri: uri };
}
