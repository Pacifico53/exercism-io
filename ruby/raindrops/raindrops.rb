class Raindrops
    def self.convert(num)
        r = ""
        if num % 3 == 0
            r+="Pling"
        end
        if num % 5 == 0
            r+="Plang"
        end
        if num % 7 == 0
            r+="Plong"
        end
        r = num.to_s if r.empty?
        r
    end
end
