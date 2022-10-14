class Character {
    constructor(row, col) {
        this.x = col;
        this.y = row;
        this._x = col;
        this._y = row;
        this.direction = 1;
        this._direction = 1;
    }

    setLocation(y, x) {
        this.x = x;
        this.y = y;
        this._x = x;
        this._y = y;
        this.direction = 1;
        this._direction = 1;
    }

    turnRight() {
        this.direction += 1;
    }
    turnLeft() {
        this.direction -= 1;
    }
    _turnRight() {
        this._direction += 1;
    }
    _turnLeft() {
        this._direction -= 1;
    }
    onMilk(_board) {
        return _board[this._y][this._x] === 1;
    }
    frontPosition(_board) {
        if (this.direction % 4 === 0) {
            //UP
            return {
                y: (this.y - 1),
                x: this.x
            };
        } else if (this.direction % 4 === 1) {
            //RIGHT
            return {
                y: this.y,
                x: (this.x + 1)
            };
        } else if (this.direction % 4 === 2) {
            //DOWN
            return {
                y: (this.y + 1),
                x: this.x
            };
        } else if (this.direction % 4 === 3) {
            //LEFT
            return {
                y: this.y,
                x: (this.x - 1)
            };
        }
    }
    treeFront(_board) {
        try {
            if (this._direction % 4 === 0) {
                //UP
                return _board[this._y - 1][this._x] === 3;
            } else if (this._direction % 4 === 1) {
                //RIGHT
                return (_board[this._y][this._x + 1] === 3)
            } else if (this._direction % 4 === 2) {
                //DOWN
                return _board[this._y + 1][this._x] === 3;
            } else if (this._direction % 4 === 3) {
                //LEFT
                return (_board[this._y][this._x - 1] === 3)
            }
        } catch(e) {
            return false;
        }
    }
    treeLeft(_board) {
        try {
            if (this._direction % 4 === 0) {
                //UP
                return _board[this._y][this._x - 1] === 3;
            } else if (this._direction % 4 === 1) {
                //RIGHT
                return (_board[this._y - 1][this._x] === 3)
            } else if (this._direction % 4 === 2) {
                //DOWN
                return _board[this._y][this._x + 1] === 3;
            } else if (this._direction % 4 === 3) {
                //LEFT
                return (_board[this._y + 1][this._x] === 3)
            }
        } catch(e) {
            return false;
        }
    }
    treeRight(_board) {
        try {
            if (this._direction % 4 === 0) {
                //UP
                return _board[this._y][this._x + 1] === 3;
            } else if (this._direction % 4 === 1) {
                //RIGHT
                return (_board[this._y + 1][this._x]) === 3;
            } else if (this._direction % 4 === 2) {
                //DOWN
                return _board[this._y][this._x - 1] === 3;
            } else if (this._direction % 4 === 3) {
                //LEFT
                return (_board[this._y - 1][this._x] === 3)
            }
        } catch(e) {
            return false;
        }
    }
    _move() {
        while (this._direction < 0) {
            this._direction += 4;
        }
        if (this._direction % 4 === 0) {
            //UP
            this._y -= 1;
        } else if (this._direction % 4 === 1) {
            //RIGHT
            this._x += 1;
        } else if (this._direction % 4 === 2) {
            //DOWN
            this._y += 1;
        } else if (this._direction % 4 === 3) {
            //LEFT
            this._x -= 1;
        }
    }
    move() {
        while (this.direction < 0) {
            this.direction += 4;
        }
        if (this.direction % 4 === 0) {
            //UP
            this.y -= 1;
        } else if (this.direction % 4 === 1) {
            //RIGHT
            this.x += 1;
        } else if (this.direction % 4 === 2) {
            //DOWN
            this.y += 1;
        } else if (this.direction % 4 === 3) {
            //LEFT
            this.x -= 1;
        }
    }
}

export default Character;