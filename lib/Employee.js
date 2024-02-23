// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        if (typeof name !== 'string' || name.trim().length === 0) {
            throw new Error('Name must be at least one character.');
        }

        if (!Number.isInteger(id) || id <= 0) {
            throw new Error('ID must be a positive number.');
        }

        if (typeof email !== 'string' || !email.includes('@')) {
            throw new Error('Email must contain the @ character.');
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
