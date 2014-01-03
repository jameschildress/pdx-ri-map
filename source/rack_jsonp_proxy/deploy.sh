# Get the directory of this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"


# Copy rackup file to remote host
scp "${DIR}/config.ru" "${SSH_LINODE_USER}@${SSH_LINODE_HOST}:${PDX_RI_REMOTE_DIR}/config.ru"

# Restart Passenger
ssh -l $SSH_LINODE_USER $SSH_LINODE_HOST "touch ${PDX_RI_REMOTE_DIR}tmp/restart.txt"
