# Get the directory of this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Build the static site
middleman build

# Copy static site to remote host
scp -r "${DIR}/build/" "${SSH_LINODE_USER}@${SSH_LINODE_HOST}:${PDX_RI_REMOTE_DIR}/"

# Belete build directory
rm -rf "${DIR}/build/"