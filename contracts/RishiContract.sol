// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RishiContract {
    string public ownerName;
    address payable ownerAddress;

    mapping(address => uint256) public balances;

    constructor() {
        ownerName = "Rishi Kumar Singh";
        ownerAddress = payable(msg.sender);
    }

    function getOwnerData() public view returns (string memory) {
        return ownerName;
    }

    function addTokens(uint256 _amount) public {
        balances[msg.sender] += _amount;
    }

    function subtractTokens(uint256 _amount) public {
        require(
            balances[msg.sender] >= _amount,
            "Your balance is insufficient"
        );

        balances[msg.sender] -= _amount;
    }
}
