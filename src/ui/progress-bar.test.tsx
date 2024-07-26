import { render, screen } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { getAnimatedStyle } from 'react-native-reanimated';

import { PROGRESS_BAR, PROGRESS_BAR_CONTAINER } from '@/constants/test-ids';

import type { ProgressBarRef } from './progress-bar';
import { ProgressBar } from './progress-bar';

describe('ProgressBar component', () => {
  it('renders correctly', () => {
    render(<ProgressBar className="custom-class" />);
    expect(screen.getByTestId(PROGRESS_BAR_CONTAINER)).toBeTruthy();
  });

  it('sets initial progress correctly', () => {
    render(<ProgressBar initialProgress={50} />);
    const progressBar = screen.getByTestId(PROGRESS_BAR);
    expect(progressBar.props.style).toEqual(
      expect.objectContaining({ width: '50%' })
    );
  });

  it('setProgress function works correctly', async () => {
    const ref = createRef<ProgressBarRef>();
    render(<ProgressBar ref={ref} initialProgress={0} />);
    const progressBar = screen.getByTestId(PROGRESS_BAR);

    // Call setProgress and check the updated value
    if (ref.current) {
      expect(getAnimatedStyle(progressBar)).toMatchObject({ width: '0%' });
      jest.useFakeTimers();
      ref.current.setProgress(75);
      jest.advanceTimersByTime(250); // Duration of the animation
      const updatedProgressBar = await screen.findByTestId(PROGRESS_BAR);
      expect(getAnimatedStyle(updatedProgressBar)).toMatchObject({
        width: '75%',
      });
    }
  });
});
