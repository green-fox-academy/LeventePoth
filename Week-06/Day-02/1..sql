SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast 
INNER JOIN author ON book_mast.aut_id = author.aut_id 
INNER JOIN category ON book_mast.cate_id = category.cate_id
INNER JOIN publisher ON publisher.pub_id = book_mast.pub_id;
