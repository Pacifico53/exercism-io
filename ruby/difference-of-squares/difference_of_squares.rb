class Squares
    def initialize(num)
        @sum_of_squares = 0
        @square_of_sum = 0
        for i in 1..num
            @sum_of_squares += i**2
            @square_of_sum += i
        end
        @square_of_sum = @square_of_sum**2
    end

    def sum_of_squares
        @sum_of_squares
    end

    def square_of_sum
        @square_of_sum
    end

    def difference
        square_of_sum - sum_of_squares
    end
end
