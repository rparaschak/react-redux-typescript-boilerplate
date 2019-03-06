import { IStoreShape } from '../store';

declare global {
  type IGetStateFunc = () => IStoreShape;
}
