class Sieve
    def initialize(num)
        @num = num
    end

    def primes
        list = (2..@num).to_a
        for n in list
            list.delete_if {|x| x%n==0 && x!=n}
        end
        list
    end
end
