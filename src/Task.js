export class Task {
  constructor(id, name, priority, created_at, updated_at, status = false) {
    this.id = id
    this.name = name
    this.priority = priority
    this.created_at = created_at
    this.updated_at = updated_at
    this.status = status
  }

  shoutPriority() {
    return this.priority.toUpperCase() + "!!!"
  }

  createdAt() {
    return new Date(Date.parse(this.created_at))
  }

  updatedAt() {
    return new Date(Date.parse(this.updated_at))
  }
}
