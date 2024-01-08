// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.20;

import "./IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Shop is Ownable {
    IERC20 token;
    event Buy(address buyer, uint256 amount);

    constructor(address _token) Ownable(msg.sender) {
        token = IERC20(_token);
    }

    function sell(uint256 _amount) public {
        token.transferFrom(msg.sender, owner(), _amount);
        emit Buy(msg.sender, _amount);
    }
}
