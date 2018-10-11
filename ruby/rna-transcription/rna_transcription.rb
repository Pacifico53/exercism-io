class Complement
    def self.of_dna(s)
        return '' if s==''
        r=""
        i=0
        while(i<s.length)
            case s[i]
            when 'G'
                r+='C'
            when 'C'
                r+='G'
            when 'T'
                r+='A'
            when 'A'
                r+='U'
            end
            i+=1
        end
        r
    end
end
