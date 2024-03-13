// let h1_tag = React.document.createElement(
//     'div',
//     {id : "h1-tag"},
//     'hello',
//     React.createElement( 'div', null, "Welcome To React")
// );
// let container

//ITERATION 3:
let container=document.getElementById("react-container");
class KalvianContainer extends React.Component{
    render(){
        return React.createElement(`p`,null,`Hey Kalvians`,
        React.createElement(`div`,null,`Let's rock and roll with classes`)
        );
    }
}

ReactDOM.render(React.createElement(KalvianContainer),container);