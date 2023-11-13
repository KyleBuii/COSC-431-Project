import { Component } from "react";
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
    render(){
        return(
            <div className="main">
                <input type="text" className="search"/>
                <div className="line-1"></div>
                <div className="line-2"></div>
            </div>
        );
    };
};

export default Home;