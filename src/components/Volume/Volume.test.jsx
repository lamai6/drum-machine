import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Volume from './Volume';

beforeAll(() => {
  global.playMock = jest
    .spyOn(window.HTMLMediaElement.prototype, 'play')
    .mockImplementation(() => {});
  global.pauseMock = jest
    .spyOn(window.HTMLMediaElement.prototype, 'pause')
    .mockImplementation(() => {});
});

afterAll(() => {
  global.playMock.mockRestore();
  global.pauseMock.mockRestore();
});

describe('Volume component test suite', () => {
  it('should display faVolumeHigh icon when updating volume above 66', async () => {
    const { rerender, container } = render(
      <Volume updateVolume={() => {}} volume={1} />
    );
    const volumeIcon = container.querySelector('svg');

    rerender(<Volume updateVolume={() => {}} volume={0.8} />);

    await waitFor(() => {
      expect(volumeIcon).toHaveAttribute('data-icon', 'volume-high');
    });
  });

  it('should display faVolumeLow icon when updating volume between 20 and 66', async () => {
    const { rerender, container } = render(
      <Volume updateVolume={() => {}} volume={1} />
    );
    const volumeIcon = container.querySelector('svg');

    rerender(<Volume updateVolume={() => {}} volume={0.4} />);

    await waitFor(() => {
      expect(volumeIcon).toHaveAttribute('data-icon', 'volume-low');
    });
  });

  it('should display faVolumeOff icon when updating volume between 0 and 20', async () => {
    const { rerender, container } = render(
      <Volume updateVolume={() => {}} volume={1} />
    );
    const volumeIcon = container.querySelector('svg');

    rerender(<Volume updateVolume={() => {}} volume={0.18} />);

    await waitFor(() => {
      expect(volumeIcon).toHaveAttribute('data-icon', 'volume-off');
    });
  });

  it('should display faVolumeXmark icon when updating volume to 0', async () => {
    const { rerender, container } = render(
      <Volume updateVolume={() => {}} volume={1} />
    );
    const volumeIcon = container.querySelector('svg');

    rerender(<Volume updateVolume={() => {}} volume={0} />);

    await waitFor(() => {
      expect(volumeIcon).toHaveAttribute('data-icon', 'volume-xmark');
    });
  });
});
