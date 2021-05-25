import React, {Component} from 'react'
import Slider from 'react-rangeslider'
import "./rangrSlider.css"
import "../change_plan/free_plan.css"
import AddP from "../change_plan/growth_engine";

class Horizontal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.data.organization.plan_details.mua
        }
    }
    
    handleChangeStart = () => {
        console.log('Change event started')
    };
    handleChange = value => {
        this.setState({
            value: value
        });
        
        if(typeof this.props.onChange === 'function'){
            this.props.onChange(value);
        }
        
    };
    
    handleChangeComplete = () => {
        console.log('Change event completed')
    };
    // componentDidMount() {}
    render() {
        const {value} = this.state
        console.log(value+"ll")
        return (
            <div>
                <div className='slider' style={{width: '980px', backgroundColor: 'ff0075'}}>
                    
                    <div style={{textAlign: 'center', color: 'ff0075', fontSize: '35px', marginBottom: '30px'}}>
                    </div>
                    <Slider
                        min={0}
                        max={50000}
                        value={value}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChange}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    <div className='value'>50,000+</div>
                </div>
            </div>
        )
    }
}

export default Horizontal