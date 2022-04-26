import React from "react";
import { compose, withHandlers } from "recompose";
import { withFormik, Form, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormTest = ({ isSubmitting, trigger }) => (
	<Form>
		<div className="field">
			<FastField name="test" placeholder="test" />
			<ErrorMessage name="test" />
		</div>
		<div className="field">
			<FastField name="email" placeholder="email" />
			<ErrorMessage name="email" />
		</div>
		<div className="field">
			<FastField name="name" placeholder="name" />
			<ErrorMessage name="name" />
		</div>
		<div className="field">
			<FastField name="phoneNumber" placeholder="phone number" />
			<ErrorMessage name="phoneNumber" />
		</div>
		<button type="button" onClick={trigger}>
			Trigger
		</button>
		<button disabled={isSubmitting} type="submit">
			Submit
		</button>
	</Form>
);

const enhance = compose(
	withFormik({
		mapPropsToValues: () => ({
			test: "",
			email: "",
			name: "",
			phoneNumber: ""
		}),
		validationSchema: () =>
			Yup.object().shape({
				test: Yup.string(),
				email: Yup.string().email(),
				name: Yup.string(),
				phoneNumber: Yup.string()
					.required()
					.matches(
						/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
						"Phone number is not valid"
					)
			}),
		handleSubmit: values => {
			console.log(values);
		}
	}),
	withHandlers({
		trigger: ({ submitForm }) => () => {
			submitForm("damn");
		}
	})
);

export default enhance(FormTest);
