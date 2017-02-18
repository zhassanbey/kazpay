API reference:
/pay - POST method performs payment transaction between two people
   * fromId - id of person who pays
   * toId - id of person who receives
   * amount - amount of money transfered
/receipt - POST method shows amount of funds in the account
  * id - id of the account holder
/register - POST method registers an account
  * id - id of the account holder 
/put - POST method puts money to account
  * id - id of the account holder
  * amount - amount of money to append to the account
