const pool = require('../utils/pool');

module.exports = class Dancer {
    id;
    name;
    genre;
    method;
    country;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.genre = row.genre;
        this.method = row.method;
        this.country = row.country;
    }

    static async insert({ name, genre, method, country }) {
        const {
            rows
        } = await pool.query(
            `INSERT INTO dancers (name, genre, method, country) VALUES ($1, $2, $3, $4) 
            RETURNING *`,
            [name, genre, method, country]
        );

        return new Dancer(rows[0]);
    }

    static async find() {
        const {
            rows
        } = await pool.query(
            'SELECT * FROM dancers'
        ) 

        return rows.map((row) => new Dancer(row));
    }



}