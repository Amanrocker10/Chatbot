import  React,{Component} from 'react';
 class Land extends React.Component{
    render(){
        return(
<div>
            
    <div class="bg"></div>
    <nav>
        <img class="logo" src="asset/images/cl_logo.png" alt="LetsChat" />
        <h1 >Welcome to Cloudstrats Chatapp</h1>
    </nav>

    <div class="container">
        <div class="message left"> Cloudy: Hello Welcome to Cloudstrats Chatapp</div>
        
    </div>

    <div class="send">


        <form action="#" id="send-container">
            <input type="text" name="messageInp" id="messageInp"/>
            
            <button class="btn" type="submit"> Send</button>
            
        </form>
        </div>
        </div>
        )

    }


 }

  export default Land