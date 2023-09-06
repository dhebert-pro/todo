export default class Todo {
  label: string;
  enabled: boolean = false;
  id: string;

  constructor(label: string, enabled: boolean = false) {
    this.label = label
    this.enabled = enabled
    this.id = label
  }

  toJSON() {
    return {
      label: this.label,
      enabled: this.enabled,
      id: this.id
    }
  }
}