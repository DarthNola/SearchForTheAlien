import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class Cardlist extends Component {
    render() {
        const {aliens} = this.props;
        return (
            <div className='card-list'> 
                {
                    aliens.map((alien) => {
            
                     return( 
                           <Card alien ={alien}/>
                        )
                    })
                }
            </div>)
        
    }
}
export default Cardlist;