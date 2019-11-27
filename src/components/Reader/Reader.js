import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import s from '../styles.module.css';

class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
      }),
    ).isRequired,
  };

  state = {
    indx: 0,
  };

  back = () => {
    this.setState(state => ({
      indx: state.indx - 1,
    }));
  };

  forward = () => {
    this.setState(state => ({
      indx: state.indx + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { indx } = this.state;
    const { title, text } = items[indx];

    const isButtonPrevActive = indx === 0;
    const isButtonNextActive = indx === items.length - 1;

    return (
      <div className={s.reader}>
        <Controls
          isButtonPrevActive={isButtonPrevActive}
          isButtonNextActive={isButtonNextActive}
          back={this.back}
          forward={this.forward}
        />
        <Counter indx={indx + 1} length={items.length} />
        <Publication text={text} title={title} />
      </div>
    );
  }
}

export default Reader;
