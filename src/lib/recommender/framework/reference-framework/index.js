import Framework from '../';

export default class ReferenceFramework extends Framework {
  static create(framework) {
    return new ReferenceFramework(
      Object.assign({}, framework, { id: 'reference-framework' })
    )
  }
}
