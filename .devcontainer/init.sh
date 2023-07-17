# Install All Dependencies
npm i

echo "----------------------------"
echo "Cloning img-optimize project repo"
git clone https://github.com/VirtuBox/img-optimize.git $HOME/.img-optimize
echo "----------------------------"

echo "----------------------------"
echo "Creating img-optimize alias in $($HOME)/.bashrc ..."
echo "----------------------------"

echo "----------------------------"
echo "Sourcing .bashrc file into current active bash env"
. ~/.bashrc
echo "----------------------------"

echo "alias img-optimize=$HOME/.img-optimize/optimize.sh" >> $HOME/.bashrc


echo "----------------------------"
echo "Installation Completed"
echo "----------------------------"