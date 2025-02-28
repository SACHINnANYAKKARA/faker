import type { LocaleDefinition } from '../..';
import address from './address';
import company from './company';
import internet from './internet';
import lorem from './lorem';
import name from './name';
import phone_number from './phone_number';

const ko: LocaleDefinition = {
  title: 'Korean',
  address,
  company,
  internet,
  lorem,
  name,
  phone_number,
};

export default ko;
