import { h, Component } from 'preact';
import style from './style';

export default class DatePicker extends Component {
	constructor(props) {
		super(props);
	}
  shouldComponentUpdate() {
    return false;
  }
  componentWillReceiveProps(nextProps) {
    if (this.picker && nextProps.value!==this.props.value) {
      this.picker.value = nextProps.value;
    }
  }
	componentDidMount() {
    this.picker = document.createElement('input');
    this.picker.type = 'date';
    this.base.appendChild(this.picker);

    // further example: events
    this.picker.oninput = () => {
      if (this.props.onChange) {
        this.props.onChange({ value: this.picker.value });
      }
    };
  }
  componentDidUnmount() {
    this.base.removeChild(this.picker);
  }
  render() {
    return <div class="date-picker" />;
  }
}
