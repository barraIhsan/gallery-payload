import * as migration_20250815_145302_initial from './20250815_145302_initial';
import * as migration_20250821_081731 from './20250821_081731';

export const migrations = [
  {
    up: migration_20250815_145302_initial.up,
    down: migration_20250815_145302_initial.down,
    name: '20250815_145302_initial',
  },
  {
    up: migration_20250821_081731.up,
    down: migration_20250821_081731.down,
    name: '20250821_081731'
  },
];
