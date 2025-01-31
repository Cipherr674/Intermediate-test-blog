

const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://anupmanil10:1234@cluster0.cjnux.mongodb.net/blogdata_assesment?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('Connection established to DB');
}).catch(()=>{
    console.log('Not connected');
})
