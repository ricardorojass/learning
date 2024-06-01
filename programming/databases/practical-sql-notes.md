- [Practical SQL Book](https://practicalsql.com/)

### Joins

- Linking tables using JOIN

To connect tables in a query we use a JOIN ... ON contruct (or one of the other JOIN variants). A JOIN, which is part of the ANSI SQL standard, link one table to another in the database using a Boolean valu expression in the ON Clause. Acommonly used syntax tests for equality and commonly takes this forms:

```sql
SELECT *
FROM table_a.key_column JOIN table_b
ON table_a.key_column = table_b.foreign_key_column
```

- Primary keys and foreign keys

- JOIN types
  - JOIN
  - LEFT JOIN
  - RIGHT JOIN
  - FULL OUTER JOIN
  - CROSS JOIN

- Types of table relationships
- Set operators UNION, INTERSECT, EXCEPT