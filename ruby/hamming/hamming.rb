class Hamming
    def self.compute(s1, s2)
        r=0
        i=0
        raise ArgumentError if s1.length != s2.length
        while(i<s1.length)
            if s1[i]!=s2[i]
                r+=1
            end
            i+=1
        end
        r   #returning variables by just writing them is weird
    end
end
