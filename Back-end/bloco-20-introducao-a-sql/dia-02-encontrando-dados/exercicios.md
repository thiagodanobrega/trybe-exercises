# Exercícios

### 1. Escreva uma query para exibir a string "This is an SQL Exercise, Practice and Solution".

SELECT "This is an SQL Exercise, Practice and Solution";

### 2. Escreva uma query para exibir três números em três colunas.

SELECT 1 AS PRIMEIRO, 2 AS SEGUNDO, 3 AS TERCEIRO;

### 3. Escreva uma query para exibir a soma dos números 10 e 15.

SELECT 10 + 15;

### 4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.

SELECT 10 / 3;

### 5. Escreva uma query para exibir todas as informações de todos os cientistas.

SELECT * FROM Scientists.Scientists;

### 6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.

SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

### 7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.

SELECT * FROM Scientists.Scientists ORDER BY Name;

### 8. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.

SELECT * FROM Scientists.Projects ORDER BY Name DESC;

### 9. Escreva uma query que exiba a string "O projeto **Name** precisou de **Hours** horas para ser concluído." para cada projeto.

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' para ser concluído.') FROM Scientists.Projects;

### 10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

SELECT Name, Hours from Scientists.Projects ORDER BY Hours DESC LIMIT 3;

### 11. Escreva uma query para exibir o código de todos os projetos da tabela **AssignedTo** sem que haja repetições.

SELECT DISTINCT Project from Scientists.AssignedTo;

### 12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

SELECT Name from Scientists.Projects ORDER BY Hours DESC LIMIT 1;

### 13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

SELECT Name FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;

### 14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;

### 15. Escreva uma query que exiba a string "Existem **Number** cientistas na tabela Scientists.", em que **Number** se refira a quantidade de cientistas.

SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists') FROM Scientists.Scientists;

## Bônus

### 1. Escreva uma query para ordernar o nome das empresas de forma alfabética descendente e que retorne somente o código e o nome da primeira empresa.

SELECT Code, Name FROM PiecesProviders.Providers ORDER BY Name DESC LIMIT 1;

### 2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.

SELECT * FROM PiecesProviders.Provides ORDER BY Price Desc LIMIT 5;

### 3. Escreva uma query para exibir o nome das empresas e preço das peças, começando a lista a partir do 3º item, e exibindo o preço das quatro peças mais caras.

SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 100 OFFSET 2;

### 4. Escreva uma query para exibir a string "A peça mais cara é a: Piece , provida pela empresa Provider e custa Price reais.", essa query deve retornar somene uma única string, sendo que Price se refere ao maior preço.

SELECT CONCAT('A peça mais cara é a ', Piece, ' provida pela empresa ', Provider, ' e custa ', Price, ' reais.') FROM Provides ORDER BY Price DESC LIMIT 1;
