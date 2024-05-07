set global connect_timeout = 60; #minute
set global interactive_timeout = 1800; #30 minutes
set global wait_timeout = 600; #10 minutes

# connect_timeout: Number of seconds the mysql server waits for a connect packet before responding with 'Bad handshake'
# interactive_timeout Number of seconds the server waits for activity on an interactive connection before closing it
# wait_timeout Number of seconds the server waits for activity on a connection before closing it