import React, { Component } from "react";
import $ from "jquery";
import "./home.css";

class Home extends Component{
    componentDidMount(){
        $('.search').click(function(){
            $('.search').addClass('active');
            $('.line-1').css({      
                'transform': 'rotate(45deg)',
                'top': '0px',
                'left':'0px'
            });  
            $('.line-2').css({
                'height': '40px',
                'opacity': '1'
            });
        });

        $('.line-1, .line-2').click(function(){
            $('.search').removeClass('active').val('');
            $('.line-1').css({      
                'transform': 'rotate(-45deg)',
                'top': '-20px',
                'left':'45px'
            });  
            $('.line-2').css({
                'height': '0px',
                'opacity': '0'
            });
        });
    };

    constructor(props) {
      super(props);
      this.state = {
        searchTerm: "",
      };
    }

    handleInputChange = (event) => {
      this.setState({ searchTerm: event.target.value });
    };
  
    handleSubmit = async (event) => {
      event.preventDefault();
  
      const { searchTerm } = this.state;
      const apiUrl = "https://api.opensea.io/api/v1/assets";
      const apiKey = process.env.REACT_APP_OPEN_SEA_API_KEY; //API KEY
  
      try {
        console.log("API Key:", apiKey);
  
        const searchUrl = `${apiUrl}?order_direction=desc&offset=0&limit=20&search=${encodeURIComponent(searchTerm)}`;
        console.log("Constructed URL:", searchUrl);
  
        const response = await fetch(searchUrl, {
          headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
          },
        });
  
        console.log("Response Status:", response.status);
  
        if (response.ok) {
          window.location.href = searchUrl;
        } else {
          console.error("API request failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error making API request:", error);
      }
    };
  
    handleKeyDown = (event) => {
      if (event.key === "Enter") {
        this.handleSubmit(event);
      }
    };

    render(){
      const searchUrl = "https://opensea.io";

        return(
            <div className="main">
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="search" placeholder="" value={this.state.searchTerm}
            onChange={this.handleInputChange}/>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        );
    };
};

export default Home;
