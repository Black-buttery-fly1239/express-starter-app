create table users(
	orderId serial not null primary key,
	status text not null,
    amount int
);