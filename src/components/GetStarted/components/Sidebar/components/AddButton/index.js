import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';

const ITEM_HEIGHT = 48;

export default class AddButton extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleAdd = ({ currentTarget: { textContent: entity }}) => {
    this.handleClose();
    this.props.onAdd(entity);
  };

  render() {
    const { anchorEl } = this.state;
    const { options, disabledOptions } = this.props;
    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AddIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              disabled={disabledOptions.includes(option)}
              style={{ textTransform: 'capitalize' }}
              onClick={this.handleAdd}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </React.Fragment>
    );
  }
}

AddButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabledOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
};
