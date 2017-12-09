import React, {Component} from 'react';
import "./css/Characters.css";
class Characters extends Component {

    render() {
        return (
            <div className="characters">
                <div className="item1"><img src="http://marvel.dl.llnw.net/wdig/marvel/u/prod/marvel/i/mg/9/20/53176ebd40ad7/portrait_xlarge.jpg"/></div>
                <div className="item2"><img src="./img/amarillo.png"/></div>
                <div className="item3"><img src="./img/azul.png"/></div>
                <div className="item4"><img src="./img/morado.png"/></div>
                <div className="item5"><img src="./img/verdeClaro.png"/></div>
                <div className="item6"><img src="./img/rosado.png"/></div>
            </div>);
    }
}
export default Characters;