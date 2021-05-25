// const EditBookInfoForm= (properties) => {
//     const [data, setData] = useState();
//
//     useEffect(() => {
//         fetch("https://mocki.io/v1/65fe9ead-ccf0-4c9a-bfe7-5ff474b2313c" + properties.bookId)
//             .then(response => response.json())
//             .then(result => {
//                 setData(result);
//             });
//     }, []);
//
//     const validationSchema = Yup.object().shape({
//         title: Yup.string()
//             .max(50, 'You may only enter up to 50 characters')
//             .required('Required'),
//         description: Yup.string()
//             .max(200, 'You may only enter up to 200 characters')
//             .required('Required'),
//         author: Yup.string()
//             .required('Required')
//     })
//
//     return (
//         <div>
//             {
//                 (data !== undefined) ?
//                     <Formik initialValues={data}
//                             validationSchema={validationSchema}
//                             onSubmit={(values) => {
//                                 setTimeout(() => {
//                                     alert(JSON.stringify(values, null, 2));
//                                 }, 3000)
//                             }}
//                     >
//                         {props => (
//                             <Form>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={6}>
//                                         <TextField name="bookId" label="Book ID" variant="outlined"
//                                                    margin="dense" color="secondary" type="input"/>
//                                         <TextField name="title" label="Title" variant="outlined"
//                                                    margin="dense" color="secondary" type="input"/>
//                                         <TextField name="description" label="Description" type="input"
//                                                    variant="outlined" margin="dense" color="secondary" />
//                                         <TextField name="author" label="Author" variant="outlined"
//                                                    margin="dense" color="secondary" type="input"/>
//                                     </Grid>
//                                 </Grid>
//                                 <DialogActions >
//                                     <DangerButton icon={<SaveRecordIcon />} label="Save"
//                                                   handleClick={() => alert("Save")} />
//                                     <PrimaryButton icon={<PlusIcon />} label="Submit"
//                                                    handleClick={() => props.handleSubmit()} />
//                                     <NeutralButton label="Next" handleClick={() => alert("next")} />
//                                 </DialogActions>
//                             </Form>
//                         )}
//                     </Formik>
//                     : <OverlaySpinner />
//             }
//         </div >
//     )
// }
//
// export default EditBookInfoForm