class Board {
    constructor(map) {
        this.board = map
        this._board =  JSON.parse(JSON.stringify(map));
        this.queue = []
    }
    rock = {};

    setBoard(map) {
        this.board = map;
        this._board = map;
        this.rock = {};
    }
    getStoneHP(_y, _x) {
        let x = parseInt(_x);
        let y = parseInt(_y);
        let key = String(x) + "," + String(y);
        if (!(key in this.rock)) {
            this.rock[key] = 2 * (_x);
        }
        return this.rock[key];
    }
    removeStone(_y, _x) {
        let x = parseInt(_x);
        let y = parseInt(_y);
        try {
            if (this.board[y][x] === 4) {
                let key = String(x) + "," + String(y);
                if (!(key in this.rock)) {
                    this.rock[key] = 5;
                }
                this.rock[key] -= 1;
                if (this.rock[key] === 0) {
                    this.board[y][x] = 0;
                }
                return true;
            }
        } catch(e){
            return false;
        }
    }
    removeMilk(_y, _x) {
        let x = parseInt(_x);
        let y = parseInt(_y);
        try {
            if (this.board[y][x] === 1) {
                this.board[y][x] = 0;
                return true;
            }
        } catch(e) {
            return false;
        }
    }
    _removeMilk(_y, _x) {
        let x = parseInt(_x);
        let y = parseInt(_y);
        try {
            if (this._board[y][x] === 1) {
                this._board[y][x] = 0;
                return true;
            }
        } catch(e) {
            return false;
        }
    }
    _putMilk(_y, _x) {
        let x = parseInt(_x);
        let y = parseInt(_y);
        try {
            if (this._board[y][x] === 0) {
                this._board[y][x] = 1;
                return true;
            }
        }
        catch (e){
            return false;
        }
    }

    putMilk(_y, _x) {
        let x = parseInt(_x);
        let y = parseInt(_y);
        try {
            if (this.board[y][x] === 0) {
                this.board[y][x] = 1;
                return true;
            }
        } catch(e) {
            return false;
        }
    }
}

export default Board;