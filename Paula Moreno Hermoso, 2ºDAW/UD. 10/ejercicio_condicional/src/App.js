import React from 'react';
import  ReactDOM from 'react-dom';


const pato = {title: "Pato", src: "https://c.tenor.com/_637bDC9BbEAAAAC/duck.gif", alt:"patito bailando"};
const flamenco = {title: "Flamenco", src: "https://reygif.com/media/1/flamenco-bailando-6916.gif", alt:"flamenco bailando"};

class Pajaro extends React.Component
{
  render()
  {
    const fiftyFifty = Math.random() < 0.5;
    let ave;

    if(fiftyFifty)
    {
      ave = pato;
    }else{
      ave = flamenco;
    }

    return(
      <div>
        <h1>{ave.title}</h1>
        <img src={ave.src} alt={ave.alt} />
      </div>);
  }
}

ReactDOM.render(<Pajaro />,
	document.getElementById('root')
);

export default Pajaro;
