import React from 'react';
import PropTypes from 'prop-types';

class NavigationBar extends React.Component {
  static propTypes = {
    cc: PropTypes.string,
  };

  static defaultProps = {
    cc: null,
  };

  redirectBack = () => {
    window.history.back();
  };

  render() {
    const { cc } = this.props;

    return (
      <div className="box-nav">
        <i className="icon-left-open" onClick={this.redirectBack} />

        {cc && (
          <div>
            <p>
              Técnico: <span>{cc}</span>
            </p>
          </div>
        )}

        <style jsx>
          {`
            .box-nav {
              display: flex;
              justify-content: space-between;
              color: #d46f20;
              padding-top: 7px;
              margin-bottom: 20px;
            }
            i {
              font-size: 23px;
              position: relative;
              bottom: 5px;
            }
            p {
              color: #4c4c4c;
              font-size: 18px;
            }
            span {
              color: #d46f20;
              letter-spacing: 1px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default NavigationBar;
