import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.css';

const Score = props => {
  // Size of the enclosing square
  const size = props.size;
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (props.size - props.strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${size} ${size}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - dashArray * props.percentage / 100;

  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox={viewBox}>
      <circle
        className={styles.circleBackground}
        cx={props.size / 2}
        cy={props.size / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`} />
      <circle
        className={classnames(
          styles.circleProgress,
          {
            [styles.high]: props.percentage >= 90,
            [styles.mid]: props.percentage < 90 && props.percentage >= 50,
            [styles.low]: props.percentage < 50,
          }
        )}
        cx={props.size / 2}
        cy={props.size / 2}
        r={radius}
        strokeWidth={`${props.strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${props.size / 2} ${props.size / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }} />
      <text
        className={classnames(
          styles.circleText,
          {
            [styles.high]: props.percentage >= 90,
            [styles.mid]: props.percentage < 90 && props.percentage >= 50,
            [styles.low]: props.percentage < 50,
          }
        )}
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle">
        {`${props.percentage}%`}
      </text>
    </svg>
  );
};

Score.propTypes = {
  size: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
};

Score.defaultProps = {
  strokeWidth: 5,
};

export default Score;
