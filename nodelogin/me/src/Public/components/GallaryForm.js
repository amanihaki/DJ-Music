import React, { Component } from 'react';
import axios from 'axios';
import FormData from 'form-data';
/* var upload=multer({dest:'public/'}); */
class GallaryForm extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            description: '',
            selectedFile:''
        };

        this.state = this.initialState;
    }

    /*  handleChange = event => {
        this.setState({
            title: event.target.value,
            description:event.target.event
         });
     } */
    handleTitleChange = event => {
        this.setState({
            title: event.target.value,
        });
    }
    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value,
        });
    }

    onChangeHandler=(event)=>{

        this.setState({
            selectedFile: event.target.files
            
          })
    
    }
    /*   onFormSubmit = (event) => {
         event.preventDefault();
         
         this.props.handleSubmit(this.state);
         this.setState(this.initialState);
     } 
      */
//   async componentDidMount(){
//    await  axios.fetch('https://localhost:4000/event')
       
//          .then(data => this.setState({data}));
//        console.log(this.state.data)

//     }
/* async componentDidMount(e){
   
    try{
        const data = await fetch('http://localhost:4000/event')
        const response = await data.json();
        console.log('hi',response)
        this.setState({a:response });
                        console.log(this.state.a[0].title)
    }
  catch(err){
      console.log(err)
  }
} */

/* onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
}    */
    onGalaryFormSubmit = async (event) => {
        console.log(this.state.selectedFile, this.state.title);
       /*  debugger */
        event.preventDefault();
        const body = new FormData()
       body.append('selectedFile', this.state.selectedFile[0]);
       body.set('title',this.state.title);
        body.set('description',this.state.description);
        //console.log("body",body.title)
        /* var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]); */
       await axios({
        method:'post',
         url:  'http://localhost:4000/insertgalary',
        data: body ,
      config:{ headers:{'Content-Type':'multipart/form-data'}}
       })
        .then(res => { // then print response status
            console.log(res.statusText);
            
        })
        
    }
    render() {
         

        return (
            <form encType="multipart/form-data">
                <label>title</label>
                <input
                    type="text"
                    name="title"
                    id="title_id"
                    
                    onChange={this.handleTitleChange} />
                     <label>date</label>
                    <input
                    type="date"
                    name="title"
                    id="title_id"
                    
                    onChange={this.handleTitleChange} />
                <label>description</label>
                <input
                    type="text"
                    name="description"
                    id="des_id"
                    
                    onChange={this.handleDescriptionChange} />
                    <input
                    type="file"
              
                    name='file'
                    onClick={this.onChangeHandler}  />


                     <button type="submit" onClick={this.onGalaryFormSubmit}>
                    Submit
                </button>
            </form>
        );
    }
}
export default GallaryForm;
